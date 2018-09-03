import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    id : 1,
                    name : 'Apple Iphone 6 Plus 16GB',
                    price : 15000000,
                    image : 'https://images-na.ssl-images-amazon.com/images/I/51C05sAAOCL._SL500_AC_SS350_.jpg',
                    status : true
                },
                {
                    id : 2,
                    name : 'Samsung galaxy s7',
                    price : 12000000,
                    image : 'http://s7d2.scene7.com/is/image/SamsungUS/600_006_Galaxy_S7_bk_Left_Angle?$product-details-jpg$',
                    status : true
                },
                {
                    id : 3,
                    name : 'Oppo F1s',
                    price : 7000000,
                    image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
                    status : true
                }
            ],
            isActive : true
        };
        // this.onSetState = this.onSetState.bind(this);
    }

    onSetState = () => {
        // if(this.state.isActive === true){
        //     this.setState({
        //         isActive : false
        //     });
        // }else{
        //     this.setState({
        //         isActive : true
        //     });
        // }

        this.setState({
            isActive : !this.state.isActive
        });
    }

    render() {

        let elements = this.state.products.map((product, index) => {
            let result = '';
            if(product.status){
                result =    <tr key={ index }>
                                <td>{ index }</td>
                                <td>{ product.name }</td>
                                <td>
                                    <span className="label label-success">{ product.price } VNĐ</span>
                                </td>
                            </tr>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">State</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { elements }
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-warning" onClick={ this.onSetState }>
                                Active : { this.state.isActive === true ? 'true' : 'false' }
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
