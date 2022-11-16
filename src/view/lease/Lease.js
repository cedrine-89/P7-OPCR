import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneLease } from "../../services/Api";
import Carousel from "../../component/carousel/Carousel";
import Title from "../../component/title/Title";
import Host from "../../component/host/Host";
import Tag from "../../component/tag/Tag";
import Rating from "../../component/rating/Rating";
import Dropdown from "../../component/dropdown/Dropdown";
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
      <div className="Lease_Information">
        <div className="Lease_Information_Col1">
          {lease && <Title title={lease.title} />}
          {lease && <p>{lease.location}</p>}
          <div className="Lease_Information_Tag">{lease && lease.tags.map((tag, index) => { return <Tag key={`${lease.id}-${index}-${Math.random()}`} tag={tag} /> })}</div>
        </div>
        <div className="Lease_Information_Col2">
          {lease && <Host host={lease.host} />}
          {lease && <Rating rating={lease.rating} />}
        </div>
      </div>
      <div className="Lease_Information">
        {lease && <Dropdown status={true} listing={false} title="Description" children={lease.description} />}
        {lease && <Dropdown status={true} listing={true} title="Équipements" children={lease.equipments} />}
      </div>
    </div>
  );
}
