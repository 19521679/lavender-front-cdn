import React, {useEffect, useState} from "react";
import * as imageApi from "../../apis/image";
import * as productApi from "../../apis/product";

export default function Chitietsanpham(props) {
    const [item, setItem] = useState();
    useEffect(() =>{
        productApi.findProductById(props.product.masanpham).then(success=>{
            if (success.status === 200) {
                setItem(success.data.value);
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }, [props.product])
  return (
    <>
      {item!==undefined&&(
          <div className="_2lVoQ1">
          <div className="_1limL3">
            <div>
              <span className="_1BJEKe">
                <div />
                <div className="_3huAcN">
                  <div className="_3btL3m">
                    <div className="shopee-image__wrapper">
                      <img
                        alt="anhthunho"
                        className="shopee-image__content"
                        src={imageApi.image(item.image)}
                      ></img>
                    </div>
                  </div>
                  <div className="_1cxKtp">
                    <div>
                      <div className="_1xHDVY">
                        <span className="_30COVM text-info">
                          {item.tensanpham}
                        </span>
                        <span className="_30COVM text-info imei" style={{paddingLeft:"40px"}}>
                          Imei: {props.product.imei}
                        </span>
                      </div>
                      <div className="_1kvNGb text-warning">
                        <div>
                          Đơn giá:{" "}
                          <span >{item.dongia}₫</span>
                        </div>
                      </div>
                      <div className="_1kvNGb text-secondary">
                        <div>
                          <span className="">{props.product.mausac} - {props.product.dungluong}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="_3tEHtP" />
          </div>
        </div>
      )}
    </>
  );
}
