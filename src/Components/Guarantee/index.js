//import React, { useState, useEffect  } from "react";
import Cookies from "universal-cookie";
import React, { useState, useEffect, useRef } from "react";
//import "./style.css";
import * as productApi from "../apis/product";
import LoadingContainer from "../../Common/helper/loading/LoadingContainer";
import * as detailProductApi from "../apis/detailProduct";
import * as guaranteeApi from "../apis/guarantee";
import * as imageApi from "../apis/image";
import { Collapse } from 'react-collapse';
import Item from "./Item";

export default function Index(props) {
  const [timkiem, setTimkiem] = useState("");
  const [chitietsanpham, setChitietsanpham] = useState(undefined);
  const [sanpham, setSanpham] = useState(undefined);
  const [lichsubaohanh, setLichsubaohanh] = useState([]);
  useEffect(() => {
    //   (async()=>{
    //         await
    //         await
    //   })()
  }, []);

  const tracuuBaohanh = async () => {
    let chitietsanphamtemp;
    await detailProductApi
      .timkiemChitietsanphamImei(timkiem)
      .then((success) => {
        if (success.status === 200) {
          chitietsanphamtemp = success.data.value;
          setChitietsanpham(success.data.value);
        }
        else {
          setChitietsanpham(undefined);
          return;
        }
      })
      .catch((error) => {
        console.error(error);
        setChitietsanpham(undefined)
        return;
      });

    if (chitietsanphamtemp === undefined) {
      return;
    }
    await productApi
      .findProductById(chitietsanphamtemp.masanpham)
      .then((success) => {
        if (success.status === 200) {
          setSanpham(success.data.value);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    guaranteeApi
      .tracuuLichsubaohanhBangImei(timkiem)
      .then((success) => {
        if (success.status === 200) {
          setLichsubaohanh(success.data.value.$values);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <title>Trung t??m b???o h??nh</title>
      <section id="head-content">
        <div
          className="container carousel slide carousel-light"
          id="carouselExampleControls"
        >
          <div className="carousel-inner">
            <div className="active carousel-item">
              <img
                className="d-block"
                src="https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png"
                height={253}
                width={1700}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block"
                src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai_103211774.jpg"
                height={253}
                width={1700}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block"
                src="http://file.hstatic.net/1000347078/collection/banner-20200131075945_0ab9acddca024f60a44e7814b352fce1.jpg"
                height={253}
                width={1700}
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container ">
          <div className="row mt-2 g-4">
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Mobile</span> <span>Phones</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://i.imgur.com/b9zkoz0.jpg"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Head</span> <span>Phones</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://i.imgur.com/SHWASPG.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Smart</span> <span>Watches</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src=" https://i.imgur.com/Ya0OXCv.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Air</span> <span>Purifiers</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://i.imgur.com/2gvGwbh.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Vacuum</span> <span>Cleaners</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://i.imgur.com/UMQJpSG.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Washing</span> <span>Machines</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src="https://i.imgur.com/e9CyhXR.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Smart</span> <span>Televisions</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      src=" https://i.imgur.com/Zq8VigZ.png"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    {" "}
                    <span>Laptops</span>{" "}
                  </div>
                  <div>
                    {" "}
                    <img
                      alt=""
                      src="https://i.imgur.com/6pK5oZl.jpg"
                      height={100}
                      width={100}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="bg-white">
                <ul
                  className="nav nav-tabs nav-fill navbar-dark bg-dark"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    {" "}
                    <button
                      className="nav-link active"
                      id="faq_tab_1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#faq_tab_1"
                      type="button"
                      role="tab"
                      aria-controls="faq_tab_1"
                      aria-selected="true"
                    >
                      <div className="d-flex flex-column lh-lg">
                        {" "}
                        <i className="bx bxs-plane-alt" /> <span>Tra c???u</span>{" "}
                      </div>
                    </button>{" "}
                  </li>
                  <li className="nav-item" role="presentation">
                    {" "}
                    <button
                      className="nav-link"
                      id="faq_tab_2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#faq_tab_2"
                      type="button"
                      role="tab"
                      aria-controls="faq_tab_2"
                      aria-selected="false"
                    >
                      <div className="d-flex flex-column lh-lg">
                        {" "}
                        <i className="bx bxs-shopping-bag" />{" "}
                        <span>?????a ch??? b???o h??nh</span>{" "}
                      </div>
                    </button>{" "}
                  </li>
                  <li className="nav-item" role="presentation">
                    {" "}
                    <button
                      className="nav-link"
                      id="faq_tab_3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#faq_tab_3"
                      type="button"
                      role="tab"
                      aria-controls="faq_tab_3"
                      aria-selected="false"
                    >
                      <div className="d-flex flex-column lh-lg">
                        {" "}
                        <i className="bx bx-check-circle" />{" "}
                        <span>Ch??nh s??ch b???o h??nh</span>{" "}
                      </div>
                    </button>{" "}
                  </li>
                  {/* <li className="nav-item" role="presentation"> <button className="nav-link" id="faq_tab_4-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_4" type="button" role="tab" aria-controls="faq_tab_4" aria-selected="false">
                                <div className="d-flex flex-column lh-lg"> <i className="bx bxs-plane-alt" /> <span>?????t c??u h???i v??? b???o h??nh</span> </div>
                                </button> </li> */}
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade active show"
                    id="faq_tab_1"
                    role="tabpanel"
                    aria-labelledby="faq_tab_1-tab"
                  >
                    <div className="container p-3">
                      <div className="containwar">
                        <h1 style={{ textAlign: "center" }}>
                          Tra c???u th??ng tin b???o h??nh
                        </h1>
                        <div className="devvn_baohanh_form_box">
                          <form
                            action="#"
                            method="post"
                            className="form_devvn_baohanh"
                          >
                            <input
                              type="text"
                              name="q"
                              id="search"
                              className=" form-control bg-light"
                              placeholder="Nh???p imei s???n ph???m"
                              maxLength={128}
                              autoComplete="off"
                              value={timkiem}
                              onChange={(e) => setTimkiem(e.target.value)}
                            />
                            <hr></hr>
                            <button
                              type="button"
                              href="#demo"
                              //onClick={ }
                              //   data-bs-toggle="collapse"
                              onClick={tracuuBaohanh}
                              className="devvn_masp_submit submit submitSearch btn btn-outline-secondary m-2"
                              id="button-addon2"
                            >
                              T??m ki???m
                            </button>
                            <button
                              type="button"
                              onClick={() => { setTimkiem("") }}
                              className="submit submitSearch btn btn-outline-secondary m-2"
                              id="button-addon3"
                            >
                              Clear
                            </button>
                          </form>
                          <h4 style={{ textAlign: "center" }}>
                            T???ng ????i li??n h??? h??? tr???: 0123456789
                          </h4>
                        </div>
                      </div>
                      <Collapse isOpened={chitietsanpham !== undefined}>
                        <div className="container">
                          <div id="demo" className="">
                            <div className="d-flex justify-content-center container mt-5">
                              <div className="card p-3 bg-white">
                                <i className="fa fa-apple" />
                                <div className="about-product text-center mt-2">
                                  <img
                                    alt=""
                                    src={(chitietsanpham !== undefined && chitietsanpham.image !== undefined) ? imageApi.image(chitietsanpham.image) : ""}
                                    width={300}
                                  />
                                  <div>
                                    <h4>{(sanpham !== undefined && sanpham.tensanpham !== undefined) && sanpham.tensanpham}</h4>
                                    <h6 className="mt-0 text-black-50">
                                      {/*{chitietsanpham.dungluong} - {chitietsanpham.mausac}*/}
                                    </h6>
                                  </div>
                                </div>
                                <div className="stats mt-2">
                                  <div className="d-flex justify-content-between p-price">
                                    <span>M??u s???c</span>
                                    <span>{(chitietsanpham !== undefined && chitietsanpham.mausac !== undefined) && chitietsanpham.mausac}</span>
                                  </div>
                                  <div className="d-flex justify-content-between p-price">
                                    <span>Dung l?????ng</span>
                                    <span>{(chitietsanpham !== undefined && chitietsanpham.dungluong !== undefined) && chitietsanpham.dungluong}</span>
                                  </div>
                                  <div className="d-flex justify-content-between p-price">
                                    <span>Gi??</span>
                                    <span>{(chitietsanpham !== undefined && chitietsanpham.giamoi !== undefined) && chitietsanpham.giamoi}</span>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                  <span>Ng??y b???o h??nh</span>
                                  <span>$7,197.00</span>
                                </div>

                                <ul class="list-group">
                                  <li class="list-group-item active bg-dark mt-3">L???ch s??? b???o h??nh</li>
                                  {
                                    lichsubaohanh.map((value, key) => {
                                      return (<Item item={value} key={key}></Item>)
                                    })
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>

                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="faq_tab_2"
                    role="tabpanel"
                    aria-labelledby="faq_tab_2-tab"
                  >
                    <div className="container p-3 scroll-y">
                      <div className="p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          {" "}
                          <span>C???a h??ng chi nh??nh 1</span>
                          <div className="d-flex justify-content-between align-items-center">
                            {" "}
                            <span>S??? ??i???n tho???i</span>{" "}
                            <i className="bx bxs-plane-take-off ms-3 me-3 text-warning" />{" "}
                            <span>0123123123</span>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <span>?????a ch???: 123 ABC qu???n 3 TPHCM</span>{" "}
                        </div>
                      </div>
                      <div className="border-top p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          {" "}
                          <span>C???a h??ng chi nh??nh 2</span>
                          <div className="d-flex justify-content-between align-items-center">
                            {" "}
                            <span>S??? ??i???n tho???i</span>{" "}
                            <i className="bx bxs-plane-take-off ms-3 me-3 text-warning" />{" "}
                            <span>0123123124</span>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <span>?????a ch???: 122 ABC qu???n 5 TPHCM</span>{" "}
                        </div>
                      </div>
                      <div className="border-top p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          {" "}
                          <span>C???a h??ng chi nh??nh 3</span>
                          <div className="d-flex justify-content-between align-items-center">
                            {" "}
                            <span>S??? ??i???n tho???i</span>{" "}
                            <i className="bx bxs-plane-take-off ms-3 me-3 text-warning" />{" "}
                            <span>0123123124</span>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <span>?????a ch???: 122 ABC qu???n 5 TPHCM</span>{" "}
                        </div>
                      </div>
                      <div className="border-top p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          {" "}
                          <span>C???a h??ng chi nh??nh 4</span>
                          <div className="d-flex justify-content-between align-items-center">
                            {" "}
                            <span>S??? ??i???n tho???i</span>{" "}
                            <i className="bx bxs-plane-take-off ms-3 me-3 text-warning" />{" "}
                            <span>0123123124</span>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <span>?????a ch???: 122 ABC qu???n 5 TPHCM</span>{" "}
                        </div>
                      </div>
                      <div className="border-top p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                          {" "}
                          <span>C???a h??ng chi nh??nh 5</span>
                          <div className="d-flex justify-content-between align-items-center">
                            {" "}
                            <span>S??? ??i???n tho???i</span>{" "}
                            <i className="bx bxs-plane-take-off ms-3 me-3 text-warning" />{" "}
                            <span>0123123124</span>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <span>?????a ch???: 122 ABC qu???n 5 TPHCM</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="faq_tab_3"
                    role="tabpanel"
                    aria-labelledby="faq_tab_3-tab"
                  >
                    <div className="container p-3 mt-3">
                      <div className="container mt-1">
                        <div className="row d-flex justify-content-center">
                          <div className="col-md">
                            <div
                              className="panel-group checkbox_collapse"
                              id="accordion"
                            >
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      data-bs-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapse1"
                                    >
                                      {" "}
                                      <span className="circle" />
                                      ?????I V???I ??I???N THO???I, M??Y T??NH B???NG, LAPTOP,
                                      MUA GI?? TH?????NG?
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  id="collapse1"
                                  className="panel-collapse collapse in"
                                >
                                  <table
                                    width="100%"
                                    cellSpacing={1}
                                    cellPadding={1}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          bgcolor="#FFCC99"
                                          height={32}
                                        >
                                          <div>
                                            <strong>
                                              S???n ph???m l???i do nh?? s???n xu???t:
                                            </strong>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          bgcolor="#FFFFCC"
                                          width="51%"
                                          height={32}
                                        >
                                          <strong>Th??ng 1</strong>
                                        </td>
                                        <td
                                          align="center"
                                          bgcolor="#FFFFCC"
                                          width="49%"
                                        >
                                          <p>
                                            <strong>Th??ng 2 ??? 12</strong>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td valign="top" bgcolor="#FFFFCC">
                                          <div>
                                            <p>
                                              <strong>
                                                ??? 1 ??????i 1 (cu??ng m???u, cu??ng ma??u,
                                                cu??ng dung lu??????ng???)
                                              </strong>
                                              .<br />
                                              ??? Tr?????ng h???p s???n ph???m ?????i h???t
                                              h??ng, kh??ch h??ng c?? th??? ?????i sang
                                              s???n ph???m kh??c c??ng nh??m h??ng c??
                                              gi?? tr??? l???n h??n 50% gi?? tr??? s???n
                                              ph???m l???i (didong88.com s??? ho??n
                                              ti???n ph???n ch??nh l???ch cho kh??ch
                                              h??ng).
                                              <br />
                                              <strong>Ho???c:</strong>
                                            </p>
                                            <p>
                                              Kh??ch h??ng tr??? m??y &amp;
                                              <em> lavender.com</em>&nbsp;ho??n
                                              l???i ti???n v???i m???c gi?? b???ng 80% gi??
                                              tr??n ho?? ????n.
                                            </p>
                                          </div>
                                          <p>&nbsp;</p>
                                        </td>
                                        <td valign="top" bgcolor="#FFFFCC">
                                          <div>
                                            <p>
                                              G???i m??y b???o h??nh theo quy ?????nh c???a
                                              h??ng.
                                            </p>
                                            <p>
                                              <strong>Ho???c:</strong>
                                              <br />
                                              Kh??ch h??ng tr??? m??y &amp;
                                              <em> lavender.com </em>
                                              <strong>
                                                ho??n l???i ti???n v?? thu ph?? th??m 5%
                                              </strong>
                                              &nbsp;so v???i m???c ho??n ti???n khi tr???
                                              ??? th??ng th??? 1.
                                            </p>
                                            <p>
                                              <strong>VD</strong>: ??? th??ng th???
                                              nh???t, n???u kh??ch h??ng tr??? s???n ph???m
                                              s??? ???????c ho??n l???i ti???n v???i m???c gi??
                                              b???ng 80% th?? sang th??ng th??? 2 n???u
                                              kh??ch h??ng tr??? m??y s??? thu ph?? th??m
                                              5% n??n m???c ho??n ti???n s??? c??n 75%
                                              gi?? tr??? s???n ph???m tr??n ho?? ????n,
                                              th??ng th??? 3 m???c ho??n ti???n s??? tr???
                                              th??m 5% th??nh 70%???.
                                            </p>
                                          </div>
                                          <p>&nbsp;</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          valign="top"
                                          bgcolor="#FFFFCC"
                                          width="51%"
                                          height={32}
                                        >
                                          <div>
                                            <p>
                                              <strong>
                                                RI??NG ?????I V???I LAPTOP:
                                              </strong>
                                              <br />
                                              ??? Th???i gian b???o h??nh Laptop t???i
                                              c??c Trung t??m b???o h??nh ch??nh H??NG,
                                              ???????c k??ch ho???t b???o h??nh khi xu???t
                                              h??ng ra kh???i nh?? m??y s???n xu???t c???a
                                              H??NG do ???? th???i gian b???o h??nh c???a
                                              laptop c?? th??? ???b???ng ho???c th???p h??n???
                                              th???i gian b???o h??nh&nbsp; c???a
                                              Thegioididong.com ghi tr??n h??a ????n
                                              xu???t b??n cho Kh??ch H??ng.
                                              <br />??? Lavender.com cam k???t b???o
                                              h??nh ch??nh h??ng theo th???i gian
                                              ???????C ghi tr??n h??a ????n khi xu???t b??n
                                              cho Kh??ch H??ng. Tr?????ng h???p c?? s???
                                              ch??nh l???ch th???i gian b???o h??nh c???a
                                              H??NG th???p h??n th???i gian b???o h??nh
                                              c???a Thegioididong.com th?? Kh??ch
                                              H??ng vui l??ng mang s???n ph???m ?????n
                                              Thegioididong.com ????? ???????c b???o h??nh
                                              ch??nh h??ng.
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          bgcolor="#FFCC99"
                                          height={32}
                                        >
                                          <div>
                                            <strong>
                                              S???n ph???m kh??ng l???i (kh??ng ph?? h???p
                                              v???i nhu c???u c???a kh??ch h??ng):
                                            </strong>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          bgcolor="#FFFFCC"
                                          width="51%"
                                          height={32}
                                        >
                                          <strong>Th??ng 1</strong>
                                        </td>
                                        <td
                                          align="center"
                                          bgcolor="#FFFFCC"
                                          width="49%"
                                        >
                                          <p>
                                            <strong>Th??ng 2 ??? 12</strong>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          valign="top"
                                          bgcolor="#FFFFCC"
                                          width="51%"
                                          height={32}
                                        >
                                          <div>
                                            <p>
                                              Ho??n l???i ti???n m??y v???i gi?? b???ng 80%
                                              gi?? tr??n ho?? ????n.
                                            </p>
                                          </div>
                                        </td>
                                        <td
                                          valign="top"
                                          bgcolor="#FFFFCC"
                                          width="49%"
                                        >
                                          <div>
                                            <p>
                                              <strong>
                                                Ho??n l???i ti???n v???i m???c ph?? th??m
                                                5%
                                              </strong>
                                              &nbsp;so v???i th??ng th??? 1
                                              (80%).&nbsp;<strong>VD</strong>:
                                              th??ng th??? 2 ho??n l???i ti???n v???i m???c
                                              gi?? 75% gi?? tr??n ho?? ????n, th??ng
                                              th??? 3 l?? 70%???
                                            </p>
                                          </div>
                                          <p>&nbsp;</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          valign="top"
                                          bgcolor="#FFFFCC"
                                          width="51%"
                                          height={32}
                                        >
                                          <div>
                                            <p>
                                              C??ng ty nh???p l???i s???n ph???m c?? theo
                                              ??i???u kho???n ???tr??? l???i h??ng??? (*) ?????ng
                                              th???i xu???t b??n l???i s???n ph???m m???i.
                                              <br />
                                              Ph???n ch??nh l???ch gi?? l?? kho???n ph??
                                              s??? d???ng kh??ch h??ng ph???i tr??? v??
                                              c??ng ty xu???t ho?? ????n gi?? tr??? gia
                                              t??ng (GTGT) cho kho???n ph?? n??y.
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          bgcolor="#FFCC99"
                                          height={32}
                                        >
                                          <div>
                                            <strong>
                                              S???n ph???m l???i do ng?????i s??? d???ng:
                                            </strong>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={2}
                                          valign="top"
                                          bgcolor="#FFFFCC"
                                          height={32}
                                        >
                                          <div>
                                            <ul>
                                              <li>
                                                Kh??ng ????? ??i???u ki???n b???o h??nh theo
                                                qui ?????nh c???a h??ng.
                                              </li>
                                              <li>
                                                M??y kh??ng gi??? nguy??n 100% h??nh
                                                d???ng ban ?????u.
                                              </li>
                                              <li>M??n h??nh b??? tr???y x?????c.</li>
                                            </ul>
                                            <p>
                                              =&gt;&nbsp;
                                              <strong>
                                                Kh??ng ??p d???ng b???o h??nh, ?????i tr???.
                                                Thegioididong.com h??? tr??? chuy???n
                                                b???o h??nh, kh??ch h??ng ch???u chi
                                                ph?? s???a ch???a.
                                              </strong>
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>&nbsp;</p>
                                </div>
                              </div>
                              <div className="panel panel-default ">
                                <div className="panel-heading">
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      data-bs-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapse2"
                                    >
                                      {" "}
                                      <span className="circle" />
                                      ?????I V???I ??I???N THO???I, M??Y T??NH B???NG, LAPTOP,
                                      MUA GI?? R??? ONLINE?
                                    </a>{" "}
                                  </h4>
                                </div>
                                <div
                                  id="collapse2"
                                  className="panel-collapse collapse"
                                >
                                  <div className="panel-body">
                                    <p>
                                      ??? L???i l?? ?????i m???i trong v??ng 7 ng??y
                                      <br />
                                      ??? Sau 7 ng??y, n???u s???n ph???m l???i th???i gian
                                      b???o h??nh theo ch??nh s??ch c???a h??ng. Qu??
                                      kh??ch t??? li??n h??? b???o h??nh h??ng, TGDD/??MX
                                      kh??ng nh???n s???n ph???m b???o h??nh t???i si??u th???.
                                      <br />??? Kh??ng ??p d???ng ch??nh s??ch tr??? h??ng
                                      ho??n ti???n n???u s???n ph???m kh??ng l???i.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default ">
                                <div className="panel-heading">
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      data-bs-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapse3"
                                    >
                                      {" "}
                                      <span className="circle" />
                                      PH??? KI???N M???I?
                                    </a>{" "}
                                  </h4>
                                </div>
                                <div
                                  id="collapse3"
                                  className="panel-collapse collapse"
                                >
                                  <table width="100%">
                                    <tbody>
                                      <tr>
                                        <td bgcolor="#FFCC99" width="52%">
                                          <strong>NH??M S???N PH???M</strong>
                                        </td>
                                        <td bgcolor="#FFCC99" width="52%">
                                          <strong>CH??NH S??CH B???O H??NH</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" width="52%">
                                          <div>
                                            Pin s???c d??? ph??ng, Pin ??i???n tho???i,
                                            Th??? nh???, USB, Adapter ??? s???c, Tai
                                            nghe, Chu???t,&nbsp;Loa vi t??nh,
                                            &nbsp;Loa k??o (ph??? ki???n k??m theo
                                            kh??ng b???o h??nh),?????? c???m, C??p HDMI
                                            (tr??? s???n ph???m c???a th????ng hi???u AVA),
                                            Camera gi??m s??t, Camera h??nh tr??nh,
                                            Thi???t b??? m???ng, Ph??? ki???n ?? t??, B??t
                                            tr??nh chi???u, Android TV Box
                                          </div>
                                        </td>
                                        <td bgcolor="#FFFFCC" width="48%">
                                          <div>
                                            <ul>
                                              <li>
                                                N???u s???n ph???m l???i: b???o h??nh 1 n??m
                                                1 ?????i 1 n???u mua v???i gi?? th?????ng,
                                                ?????i trong v??ng 7 ng??y n???u mua
                                                v???i gi?? r??? online
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>Mi???ng d??n tr?????c ??? sau</div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>
                                                D??n l???n ?????u mua nguy??n gi??, t???
                                                l???n th??? 2 mua v???i gi?? 50% gi??
                                                m???i.
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>Mi???ng d??n k??nh</div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>
                                                D??n l???i mi???n ph?? trong v??ng 30
                                                ng??y n???u s???n ph???m l???i bong tr??c
                                                keo ho???c l???i c???m ???ng.
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>???p l??ng ??? bao da</div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>
                                                B???o h??nh 2 tu???n ?????i v???i s???n ph???m
                                                l???i,&nbsp;?????i trong v??ng 7 ng??y
                                                n???u mua v???i gi?? r??? online
                                              </li>
                                              <li>
                                                (L??u ??: Kh??ng ??p d???ng ???p l??ng
                                                5.000??, 10.000??, 30.000?? t???i
                                                si??u th???)
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>
                                            Ph??? ki???n ????? ch??i (g???y ch???p ???nh, gi??
                                            ??i???n tho???i,??? ),&nbsp; Adapter th???
                                            nh??? TF, Balo, T??i ch???ng s???c
                                          </div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>Kh??ng b???o h??nh</li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>
                                            Pin s???c d??? ph??ng, c??p s???c, tai nghe???
                                            th????ng hi???u AVA
                                          </div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>
                                                N???u s???n ph???m l???i: b???o h??nh 3
                                                th??ng 1 ?????i 1 n???u mua gi??
                                                th?????ng,&nbsp;?????i trong v??ng 7
                                                ng??y n???u mua v???i gi?? r??? online
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC" height={50}>
                                          <div>
                                            Ph??? ki???n ch??nh h??ng Apple, Tai nghe
                                            Beats
                                            <br />
                                            &nbsp;
                                          </div>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <div>
                                            <ul>
                                              <li>
                                                B???o h??nh 1 n??m ch??nh h??ng*
                                              </li>
                                            </ul>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>&nbsp;</p>
                                </div>
                              </div>
                              <div className="panel panel-default ">
                                <div className="panel-heading">
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      data-bs-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapse4"
                                    >
                                      {" "}
                                      <span className="circle" />
                                      S???N PH???M ?????I TR??? (???? S??? D???NG)?
                                    </a>{" "}
                                  </h4>
                                </div>
                                <div
                                  id="collapse4"
                                  className="panel-collapse collapse"
                                >
                                  <table
                                    border={1}
                                    cellSpacing={0}
                                    cellPadding={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td bgcolor="#FFCC99" width="13%">
                                          &nbsp;
                                        </td>
                                        <td bgcolor="#FFCC99" width="37%">
                                          <p>
                                            <strong>
                                              S???N PH???M L???I K??? THU???T (L???i do nh??
                                              s???n xu???t)
                                            </strong>
                                          </p>
                                        </td>
                                        <td bgcolor="#FFCC99" width="13%">
                                          <p>
                                            <strong>S???N PH???M KH??NG L???I</strong>
                                          </p>
                                        </td>
                                        <td bgcolor="#FFCC99" width="37%">
                                          <p>
                                            <strong>
                                              L???I DO NG?????I S??? D???NG (Kh??ng ??p
                                              d???ng ?????i tr???)
                                            </strong>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC">
                                          <p>&nbsp;Th??ng th??? 1&nbsp; &nbsp;</p>
                                        </td>
                                        <td bgcolor="#F6DFEB">
                                          <p>&nbsp; Bao x??i 1 th??ng</p>
                                          <p>
                                            1. ?????i s???n ph???m t????ng ??????ng (c??ng
                                            gi??, c??ng model, c??ng dung
                                            l?????ng,c??ng th???i gian b???o h??nh???)
                                          </p>
                                          <p>
                                            2. N???u kh??ng c?? s???n ph???m t????ng ??????ng
                                            th?? ho??n ti???n 100%.
                                          </p>
                                        </td>
                                        <td bgcolor="#F6DFEB">
                                          <p>Kh??ng ?????i tr???</p>
                                        </td>
                                        <td rowSpan={2} bgcolor="#F6DFEB">
                                          <p>
                                            1. Kh??ng ????? ??i???u ki???n b???o h??nh theo
                                            qui ?????nh c???a h??ng
                                          </p>
                                          <p>
                                            2. ??i???n tho???i, tablet, laptop, ?????ng
                                            h??? th??ng minh b??? tr???y x?????c M??N H??NH
                                          </p>
                                          <p>
                                            3. M??y kh??ng gi??? nguy??n 100% h??nh
                                            d???ng ban ?????u
                                          </p>
                                          <p>
                                            =&gt; Kh??ch h??ng ch???u ph?? s???a
                                            ch???a&nbsp;&nbsp;
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC">
                                          <p>&nbsp;Th??ng th??? 2-12</p>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <p>
                                            G???i m??y b???o h??nh theo ????ng qui ?????nh
                                            c???a h??ng ho???c b???o h??nh c???a&nbsp;
                                            <em>Thegioididong.com</em>
                                            &nbsp;(*)&nbsp;
                                          </p>
                                          <p>&nbsp;</p>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <p>Kh??ng ?????i tr???</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>&nbsp;</p>
                                  <p>
                                    <strong>??i???u ki???n ?????i tr???:</strong>
                                  </p>
                                  <p>
                                    1.&nbsp;C??n ?????y ????? phi???u b???o h??nh (n???u c??)
                                    v?? ph??? ki???n ??i k??m
                                  </p>
                                  <p>
                                    2.&nbsp;Ngo??i ra, KH??NG thu th??m b???t k??? ph??
                                    n??o kh??c.
                                  </p>
                                  <p>
                                    <strong>(*) Ri??ng v???i laptop</strong>
                                  </p>
                                  <p>
                                    ??? Laptop ???? qua s??? d???ng t???i
                                    Thegioididong.com/DienmayXanh.com ???????c b??n
                                    ra tu??? theo hi???n tr???ng m??y t???i t???ng si??u
                                    th???, bao g???m ph???n m???m v?? ph???n c???ng.
                                  </p>
                                  <p>
                                    ???&nbsp;Ngo???i tr??? Windows 10 b???n quy???n ???????c
                                    t??ch h???p theo m??y ???????c cam k???t s??? d???ng b??nh
                                    th?????ng, ngo??i ra c??c ph???n m???m theo h??ng nh??
                                    ???ng d???ng v??n ph??ng nh?? Office 365, Office
                                    Home &amp; Student 2019,???
                                    Thegioididong.com/DienmayXanh.com kh??ng cam
                                    k???t c??n s??? d???ng ???????c hay kh??ng.
                                  </p>
                                  <p>
                                    <strong>(*) Kh??i ni???m v??? b???o h??nh</strong>
                                  </p>
                                  <p>
                                    ??? Kh??ch h??ng ??em m??y l??n h??? th???ng
                                    Thegioididong.com/DienmayXanh.com ho???c ??em
                                    tr???c ti???p l??n h??ng ????? ???????c b???o h??nh.
                                  </p>
                                  <p>
                                    ??? Tu??? v??o th???i h???n b???o h??nh c??n l???i c???a s???n
                                    ph???m,&nbsp;Thegioididong.com s??? g???i m??y ?????n
                                    trung t??m b???o h??nh h??ng ho???c b???o h??nh tr???c
                                    ti???p t???i trung t??m b???o h??nh ?????i t??c. Ch??nh
                                    s??ch, quy tr??nh &amp; c??c nghi???p v??? s???a ch???a
                                    b???o h??nh t???i Thegioididong.com s??? ho??n to??n
                                    gi???ng v???i b???o h??nh t???i h??ng.
                                  </p>
                                  <table
                                    border={1}
                                    cellSpacing={0}
                                    cellPadding={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td bgcolor="#FFCC99" width="13%">
                                          &nbsp;
                                        </td>
                                        <td bgcolor="#FFCC99" width="37%">
                                          <p>
                                            <strong>
                                              S???N PH???M L???I K??? THU???T (
                                            </strong>
                                            <strong>L???i do nh?? s???n xu???t</strong>
                                            <strong>)</strong>
                                          </p>
                                        </td>
                                        <td bgcolor="#FFCC99" width="13%">
                                          <p>
                                            <strong>S???N PH???M KH??NG L???I</strong>
                                          </p>
                                        </td>
                                        <td bgcolor="#FFCC99" width="370%">
                                          <p>
                                            <strong>
                                              L???I DO NG?????I S??? D???NG (Kh??ng ??p
                                              d???ng ?????i tr???)
                                            </strong>
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC">
                                          <p>&nbsp;Th??ng th??? 1</p>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <p>&nbsp; Bao x??i 1 th??ng</p>
                                          <p>
                                            1. ?????i s???n ph???m t????ng ??????ng (c??ng
                                            model, c??ng dung l?????ng, c??ng th???i
                                            gian b???o h??nh???)&nbsp; &nbsp;
                                          </p>
                                          <p>
                                            2. N???u kh??ng c?? s???n ph???m t????ng ??????ng
                                            th?? ho??n ti???n 100%
                                          </p>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <p>Kh??ng ?????i tr???</p>
                                        </td>
                                        <td bgcolor="#FFFFCC">
                                          <p>
                                            1. Kh??ng ????? ??i???u ki???n b???o h??nh theo
                                            qui ?????nh c???a h??ng
                                          </p>
                                          <p>
                                            2. M??y kh??ng gi??? nguy??n 100% h??nh
                                            d???ng ban ?????u
                                          </p>
                                          <p>
                                            =&gt; Kh??ch h??ng ch???u ph?? s???a ch???a
                                          </p>
                                          <p>&nbsp;</p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td bgcolor="#FFFFCC">
                                          <p>&nbsp;Th??ng th??? 2-12</p>
                                        </td>
                                        <td colSpan={3} bgcolor="#FFFFCC">
                                          <p>
                                            &nbsp; Kh??ng ?????i tr???, kh??ng b???o h??nh
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <p>&nbsp;</p>
                                  <p>
                                    <strong>??i???u ki???n ?????i tr???:</strong>
                                  </p>
                                  <p>
                                    1. C??n ?????y ????? phi???u b???o h??nh (n???u c??) v?? ph???
                                    ki???n ??i k??m.
                                  </p>
                                  <p>
                                    2. Ngo??i ra, KH??NG thu th??m b???t k??? ph?? n??o
                                    kh??c.
                                  </p>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <h4 className="panel-title">
                                    {" "}
                                    <a
                                      data-bs-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapse5"
                                    >
                                      {" "}
                                      <span className="circle" />
                                      TH??NG TIN TH??M
                                    </a>{" "}
                                  </h4>
                                </div>
                                <div
                                  id="collapse5"
                                  className="panel-collapse collapse"
                                >
                                  <div>
                                    <p>
                                      T??? ng??y 1/6/2015 (t???i TP.HCM) v?? t???
                                      1/7/2015 (tr??n to??n qu???c) Thegioididong
                                      tri???n khai s??? d???ng&nbsp;
                                      <a
                                        title="h??a ????n ??i???n t??? t???i Thegioididong"
                                        href="https://hddt.thegioididong.com/gioi-thieu"
                                        target="_blank"
                                        rel="noopener"
                                      >
                                        <strong>h??a ????n ??i???n t???</strong>
                                      </a>
                                      &nbsp;thay cho h??a ????n gi???y nh?? tr?????c ????y.
                                    </p>
                                    <p>
                                      ?????i v???i kh??ch h??ng mua h??ng t??? th???i gian
                                      n??y kh??ch h??ng&nbsp;
                                      <strong>
                                        kh??ng c???n h??a ????n gi???y v?? kh??ng b??? tr???
                                        ph?? m???t h??a ????n
                                      </strong>
                                      &nbsp;khi ?????i tr??? s???n ph???m.
                                    </p>
                                    <p>
                                      ?????i v???i c??c kh??ch h??ng mua h??ng tr?????c th???i
                                      gian n??y, Kh??ch h??ng v???n&nbsp;
                                      <strong>
                                        c???n c?? h??a ????n khi ?????i tr??? s???n ph???m, n???u
                                        m???t h??a ????n s??? b??? tr??? ph?? theo quy ?????nh
                                        (10% gi?? tr??n h??a ????n).
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <div className="tab-pane fade" id="faq_tab_4" role="tabpanel" aria-labelledby="faq_tab_4-tab">
                    <div className="container">
                      <div className="container">
                        <div className="row height d-flex justify-content-center align-items-center">
                          <div className="col-md">
                            <div className="card">
                              <div className="p-3">
                                <h6>C??u h???i</h6>
                              </div>
                              <div className="p-3 form-color">                           
                                <form action="#" method="post" className="form_devvn_baohanh">
                                  <input type="text" class="form-control bg-light" placeholder="?????t c??u h???i" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                  <hr></hr>
                                  <input type="submit" class="btn btn-outline-secondary" id="button-addon2" value="Submit" />
                                </form>
                              </div> 
                              <div className="mt-2">
                                <div className="d-flex flex-row p-3"> <img src="https://i.imgur.com/zQZSWrt.jpg" width={40} height={40} className="rounded-circle mr-3" />
                                  <div className="w-100 px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex flex-row align-items-center"> <span className="mr-2"><b>Tran Ly C</b></span></div> <small>12h ago</small>
                                    </div>
                                    <p className="text-justify comment-text mb-0">E mu???n b???o h??nh ??i???n tho???i m?? ??ang d???ch th?? e g???i ??? chi nh??nh g???n nh???t ko shop</p>
                                    <div className="container">
                                      <div className="panel-heading">
                                        <button type="button" href="#reply1" className="btn btn-primary mt-3 mb-3" data-bs-toggle="collapse">Xem c??u tr??? l???i</button>
                                      </div>
                                      <div id="reply1" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                          Ch??o anh! <br />
                                          S???n ph???m anh mua b??n em c?? th??? mang s???n ph???m t???i si??u th??? Th??? Gi???i Di ?????ng n??o c??ng ???????c ??? <br />
                                          Th??ng tin ?????n anh. 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row p-3"> <img src="https://i.imgur.com/3J8lTLm.jpg" width={40} height={40} className="rounded-circle mr-3" />
                                  <div className="w-100 px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex flex-row align-items-center"> <span className="mr-2"><b>Nguyen Thi A</b></span></div> <small>2h ago</small>
                                    </div>
                                    <p className="text-justify comment-text mb-0">shop xem gi??p em laptop dell c???a em ???? b???o h??nh ?????n ????u r???i ???. Em mang qua tgd?? ???????c 1 tu???n r???i ???. s??t: xxxx656348</p>
                                    <div className="container">
                                      <div className="panel-heading">
                                        <button type="button" href="#reply2" className="btn btn-primary mt-3 mb-3" data-bs-toggle="collapse">Xem c??u tr??? l???i</button>
                                      </div>
                                      <div id="reply2" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                          Ch??o anh <br />
                                          D??? b??n em ???? ti???p nh???n th??ng tin c???a m??nh, m??nh vui l??ng ?????i th??m b??n em s??? c?? li??n h??? ph???n h???i trong 60p ???<br />
                                          Th??ng tin ?????n anh. 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row p-3"> <img src="https://i.imgur.com/agRGhBc.jpg" width={40} height={40} className="rounded-circle mr-3" />
                                  <div className="w-100 px-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="d-flex flex-row align-items-center"> <span className="mr-2"><b>Le Van B</b></span></div> <small>12h ago</small>
                                    </div>
                                    <p className="text-justify comment-text mb-0">M??nh c?? mua c??p s???c xmobile v?? ?????u s???c ava ??? th??? gi???i di ?????ng b???o h??nh qua s??? xxxx592456 m?? sao check ra k c?? th??ng tin ???? Ch??? c?? c??p s???c 3 ????u mua trc ?????y?</p>
                                    <div className="container">
                                      <div className="panel-heading">
                                        <button type="button" href="#reply3" className="btn btn-primary mt-3 mb-3" data-bs-toggle="collapse">Xem c??u tr??? l???i</button>
                                      </div>
                                      <div id="reply3" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                          Ch??o anh! <br />
                                          D??? s??? ??i???n tho???i  b??n em ki???m tra c?? mua C??p 3 ?????u Lightning Type C Micro 1m AVA AP03-1000 Tr???ng (M???i) 83,000 09:00 13/07/2021 anh nha <br />
                                          Th??ng tin ?????n anh. 
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
