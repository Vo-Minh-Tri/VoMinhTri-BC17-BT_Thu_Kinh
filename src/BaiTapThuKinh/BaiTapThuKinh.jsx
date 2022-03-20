import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default class BaiTapThuKinh extends Component {
  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          onClick={() => {
            this.setState({
              glassCurrent: glassesItem,
            });
          }}
          className="mx-2 p-2 border"
          style={{ cursor: "pointer" }}
          width={110}
          key={index}
          src={glassesItem.url}
          alt=""
        />
      );
    });
  };

  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  render() {
    const styleGlasses = {
      width: "140px",
      top: "75px",
      right: "200px",
      opacity: "0.78",
    };

    const styleInfo = {
      width: "250px",
      height: "105px",
      bottom: "105px",
      left: "145px",
      backgroundColor: "rgba(255,127,0,0.5)",
      textAlign: "left",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          height: "793px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "793px" }}>
          <h3
            className="text-center text-light p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="position-relative">
                  <img src="./glassesImage/model.jpg" alt="" width={250} />
                  <img
                    style={styleGlasses}
                    className="position-absolute"
                    src={this.state.glassCurrent.url}
                    alt=""
                  />
                  <div style={styleInfo} className="position-relative pl-2">
                    <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                      {this.state.glassCurrent.name}
                    </p>
                    <p>{this.state.glassCurrent.desc}</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./glassesImage/model.jpg" alt="" width={250} />
              </div>
            </div>
          </div>

          <div className="bg-light container d-flex justify-content-center p-5">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
