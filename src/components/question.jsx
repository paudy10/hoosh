import React from "react";
import Form from "react-bootstrap/Form";

const Question = () => {
  return (
    <div className="d-flex flex-column mt-5 w-100 px-5 pt-4">
      <div className="d-flex flex-row justify-content-between align-items-center rtl questionBox">
        <div>سوال 1 در مورد مورد مورد مورد می باشد ؟</div>
        <div>
          <Form.Select aria-label="Default select example">
            <option>انتخاب پاسخ</option>
            <option value="1">جواب 1</option>
            <option value="2">جواب 2</option>
            <option value="3">جواب 3</option>
            <option value="4">جواب 4</option>
          </Form.Select>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center rtl questionBox">
        <div>سوال 2 در مورد مورد مورد مورد می باشد ؟</div>
        <div>
          <Form.Select aria-label="Default select example">
            <option>انتخاب پاسخ</option>
            <option value="1">جواب 1</option>
            <option value="2">جواب 2</option>
            <option value="3">جواب 3</option>
            <option value="4">جواب 4</option>
          </Form.Select>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center rtl questionBox">
        <div>سوال 3 در مورد مورد مورد مورد می باشد ؟</div>
        <div>
          <Form.Select aria-label="Default select example">
            <option>انتخاب پاسخ</option>
            <option value="1">جواب 1</option>
            <option value="2">جواب 2</option>
            <option value="3">جواب 3</option>
            <option value="4">جواب 4</option>
          </Form.Select>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center rtl questionBox">
        <div>سوال 4 در مورد مورد مورد مورد می باشد ؟</div>
        <div>
          <Form.Select aria-label="Default select example">
            <option>انتخاب پاسخ</option>
            <option value="1">جواب 1</option>
            <option value="2">جواب 2</option>
            <option value="3">جواب 3</option>
            <option value="4">جواب 4</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};
export default Question;
