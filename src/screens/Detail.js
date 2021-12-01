import React from 'react';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center my-5">詳細・編集</h3>
                <div className="text-right my-3"><Link to="/">一覧へ戻る</Link></div>
            </div>
        );
    }
}

export default Detail;