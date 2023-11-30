import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  const [products, setProducts] = useState([
    { name: "멋진 바지", price: 20000, option: [28, 30, 32], like: 100 },
    {
      name: "멋진 셔츠",
      price: 10000,
      option: ["small", "medium", "large"],
      like: 200,
    },
    {
      name: "멋진 신발",
      price: 30000,
      option: [230, 240, 250, 260, 270],
      like: 300,
    },
  ]);

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품{id}
          </div>
          <div>
            <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
