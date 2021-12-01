import React from 'react';
import { Link } from 'react-router-dom';

import firebase, { db } from '../Firebase';

class Index extends React.Component {

    state = {
        list: [],
    }

    //データ取得
    getData = async () => {
        const colRef = db.collection("members")
            .orderBy('createdAt', 'desc')
            .limit(10);
        const snapshots = await colRef.get();
        const docs = snapshots.docs.map(doc => doc.data());
        await this.setState({
            list: docs,
        });
    }

    //更新時のcalback
    onCollectionUpdate = (querySnapshot) => {
        //変更の発生源を特定 local:自分, server:他人
        // const source = querySnapshot.metadata.hasPendingWrites ? "local" : "server";
        // if (source === 'local')  this.getData(); //期待した動きをしない
        this.getData();
    }

    componentDidMount = async () => {
        //普通に取得
        await this.getData();
        //collectionの更新を監視
        this.unsubscribe = db.collection("members").onSnapshot(this.onCollectionUpdate);
    }

    //監視解除
    componentWillUnmount = () => {
        this.unsubscribe();
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center my-5">一覧表示</h3>
                <div className="my-3"><Link to="/create">新規登録</Link></div>
                <table className="table">
                    <tbody>
                        {
                            this.state.list.map(item => (
                                <tr key={item.docId + String(new Date())}>
                                    <td>{item.docId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={`/Detail/${item.docId}`}>詳細</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Index;