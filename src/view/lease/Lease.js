import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneLease } from "../../services/Api";
import Carousel from "../../component/carousel/Carousel";
import "./Lease.scss";

export default function Lease() {
  const [lease, setLease] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneLease(id).then((data) => {
      if (data === undefined) {
        navigate("/404");
      } else {
        setLease(data);
      }
    });
  },[id, navigate]);

  return (
    <div className="Lease">
      {lease && <Carousel images={lease.pictures} text={lease.title} prefix={lease.id} />}
    </div>
  );
}
