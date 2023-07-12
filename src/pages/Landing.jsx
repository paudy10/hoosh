import React from "react";
import Form from "react-bootstrap/Form";
import "../css/landing.css";
import Header from "../components/header";
// import DragImage from "../components/dragImage";
// import Question from "../components/question";
import ImageUploading from "react-images-uploading";
import { toast } from "react-toastify";
import axios from "axios";

const Landing = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const submitForm = async () => {
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const q4 = document.getElementById("q4").value;

    if (
      q1 !== "انتخاب پاسخ" &&
      q2 !== "انتخاب پاسخ" &&
      q3 !== "انتخاب پاسخ" &&
      q4 !== "انتخاب پاسخ" &&
      images.length > 0
    ) {
      let image = images[0].data_url;

      await axios
        .post(
          "https://hooshapi.iran.liara.run/api/v1/setdata",
          {
            q1: q1,
            q2: q2,
            q3: q3,
            q4: q4,
            image: image,
          },
          {
            "content-type": "multipart/form-data",
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.msg);
          }
        })
        .catch((err) => {
          toast.error("فرم ارسال نشد !");
          console.log(err);
        });
    } else {
      toast.error("پر کردن تمام قسمت ها الزامی است !");
    }
  };
  return (
    <div className="containerApp">
      <div className="header d-flex justify-content-center align-items-center w-100">
        <Header login={true} />
      </div>
      <div className="body">
        <div className="dragImage col-lg-6 col-12 col-sm-12">
          <div className="drag">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              inputProps={{ id: "image", name: "image" }}>
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    name="image"
                    className="draganddrop"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}>
                    عکس خود را وارد کنید
                    {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="image-item">
                        {console.log(image.data_url)}
                        <img
                          src={image["data_url"]}
                          alt=""
                          width="100"
                        />
                        <div className="image-item__btn-wrapper">
                          {/* <button onClick={() => onImageUpdate(index)}></button> */}
                        </div>
                      </div>
                    ))}
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <button
                      key={index}
                      className="deleteImg"
                      onClick={() => onImageRemove(index)}>
                      حذف
                    </button>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
        <div className="question col-lg-6 col-12 col-sm-12">
          <form
            id="form"
            className="w-100">
            <div className="d-flex flex-column mt-5 w-100 px-5 pt-4">
              <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center rtl questionBox">
                <div>سوال 1 در مورد مورد مورد مورد می باشد ؟</div>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    name="question1"
                    id="q1">
                    <option>انتخاب پاسخ</option>
                    <option value="1">جواب 1</option>
                    <option value="2">جواب 2</option>
                    <option value="3">جواب 3</option>
                    <option value="4">جواب 4</option>
                  </Form.Select>
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center rtl questionBox">
                <div>سوال 2 در مورد مورد مورد مورد می باشد ؟</div>
                <div>
                  <Form.Select
                    id="q2"
                    aria-label="Default select example"
                    name="question2">
                    <option>انتخاب پاسخ</option>
                    <option value="1">جواب 1</option>
                    <option value="2">جواب 2</option>
                    <option value="3">جواب 3</option>
                    <option value="4">جواب 4</option>
                  </Form.Select>
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center rtl questionBox">
                <div>سوال 3 در مورد مورد مورد مورد می باشد ؟</div>
                <div>
                  <Form.Select
                    id="q3"
                    aria-label="Default select example"
                    name="question3">
                    <option>انتخاب پاسخ</option>
                    <option value="1">جواب 1</option>
                    <option value="2">جواب 2</option>
                    <option value="3">جواب 3</option>
                    <option value="4">جواب 4</option>
                  </Form.Select>
                </div>
              </div>
              <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center rtl questionBox">
                <div>سوال 4 در مورد مورد مورد مورد می باشد ؟</div>
                <div>
                  <Form.Select
                    id="q4"
                    aria-label="Default select example"
                    name="question4">
                    <option>انتخاب پاسخ</option>
                    <option value="1">جواب 1</option>
                    <option value="2">جواب 2</option>
                    <option value="3">جواب 3</option>
                    <option value="4">جواب 4</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="senddata">
          <p onClick={submitForm}>ارسال اطلاعات</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
