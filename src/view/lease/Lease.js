import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneLease } from "../../services/Api";
import Carousel from "../../component/carousel/Carousel";
import Title from "../../component/title/Title";
import Host from "../../component/host/Host";
import Tag from "../../component/tag/Tag";
import "./Lease.scss";
import Rating from "../../component/rating/Rating";
import Dropdown from "../../component/dropdown/Dropdown";

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
        {lease && <Title title={lease.title} />}
        {lease && <Host host={lease.host} />}
      </div>
      <div className="Lease_Location">
        {lease && <p>{lease.location}</p>}
      </div>
      <div className="Lease_Tags_Rating">
        <div>
          {lease && lease.tags.map((tag, index) => { return <Tag key={`${lease.id}-${index}-${Math.random()}`} tag={tag} /> })}
        </div>
        {lease && <Rating rating={lease.rating} />}
      </div>
      <div className="Lease_Information">
        {lease && <Dropdown status={true} listing={false} title="Description" children={lease.description} />}
        {lease && <Dropdown status={true} listing={true} title="Équipements" children={lease.equipments} />}
      </div>
    </div>
  );
}
