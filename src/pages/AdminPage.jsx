import React from "react";
import axios from "axios";
import { Footer, Navbar } from "../components";


class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: null,
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0
      },
      showAddForm: false,
      showEditForm: false
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products/")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteProduct = (id) => {
    axios
      .delete(`https://645dfec08d08100293f40d85.mockapi.io/products/${id}`)
      .then(response => {
        console.log(response);
        const updatedProducts = this.state.products.filter(product => product.id !== id);
        this.setState({ products: updatedProducts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addProduct = async () => {
    try {
      const newProduct = {
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        category: this.state.category,
        image: this.state.image,
        rating: {
          rate: 0,
          count: 0
        }
      };

      const response = await axios.post(
        "https://645dfec08d08100293f40d85.mockapi.io/products",
        newProduct
      );

      console.log(response);

      const updatedProducts = [...this.state.products, response.data];

      this.setState({
        products: updatedProducts,
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        showAddForm: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  editProduct = (id) => {
    const product = this.state.products.find(product => product.id === id);
    this.setState({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      showEditForm: true
    });
  }

  updateProduct = () => {
    const updatedProduct = {
      id: this.state.id,
      title: this.state.title,
      price: this.state.price,
      description: this.state.description,
      category: this.state.category,
      image: this.state.image,
      rating: {
        rate: 0,
        count: 0
      }
    };

    axios
      .put(`https://645dfec08d08100293f40d85.mockapi.io/products/${this.state.id}`, updatedProduct)
      .then(response => {
        console.log(response);
        const updatedProducts = this.state.products.map(product => {
          if (product.id === this.state.id) {
            return updatedProduct;
          }
          return product;
        });
        this.setState({ products: updatedProducts, showEditForm: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="adminpage" style={{ backgroundColor: '#FFDAC1' }}>
        <Navbar />
        <h1>Admin Page</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12" style={{ backgroundColor: '#FFDAC1' }} >
              <div className="card">
                <div className="card-body">
                  <h4 className="Title_table">Quản lý sản phẩm</h4>
                  <p className="card-text">
                    <button className="btn btn-primary" onClick={() => this.setState({ showAddForm: true })}>
                      Thêm sản phẩm mới
                    </button>
                  </p>
                  {this.state.showAddForm && (
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div className="card-body">
                              <div className="form-group">
                                <label>Tên Sản phẩm</label>
                                <input type="text" className="form-control" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                              </div>
                              <div className="form-group">
                                <label>Giá</label>
                                <input type="text" className="form-control" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                              </div>
                              <div className="form-group">
                                <label>Mô tả</label>
                                <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                              </div>
                              <div className="form-group">
                                <label>Loại sản phẩm</label>
                                <select value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })} className="form-control">
                                  <option value="">Chọn một loại sản phẩm</option>
                                  <option value="men">Thời trang nam</option>
                                  <option value="women">Thời trang nữ </option>
                                  <option value="jewelry">Hàng nổi bật</option>
                                  <option value="electronics">Hàng giảm giá </option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Ảnh sản phẩm</label>
                                <input type="text" className="form-control"  style={{ width:'30px' }} value={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} />
                              </div>
                              <button type="button" className="btn btn-primary" onClick={this.addProduct}>
                                Add Product
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Mô tả sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Xóa</th>
                        <th>Sửa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.products.map(product => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.title}</td>
                          <td>
                            <img width={200} className="img2" src={product.image} alt={product.title} />
                          </td>
                          <td>{product.price}</td>
                          <td>{product.description}</td>
                          <td>{product.category}</td>
                          <td>
                            <button className="btn_delete btn-primary" onClick={() => this.deleteProduct(product.id)}>Delete</button></td>
                          <td>
                            <button className="btn_edit btn-primary" onClick={() => this.editBook(product.id)}>Edit</button></td>
                            </tr>
                          ))}
                      </tbody>
                      </table>
                                    
                  </div>
                 </div>
               </div>
          </div>
       </div>
       <Footer />
        {this.state.showEditForm ? this.formEditBook() : null}
    </div>
             
        );
     }
 }
export default AdminPage;
