import React from "react";
import MissionBox from "./MissionBox";
import { HiUserGroup } from "react-icons/hi";
import { BiRocket } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { FaGreaterThan, FaQuoteLeft, FaUser } from "react-icons/fa";

function Mission() {
  return (
    <div className="  flex flex-col md:flex-row  justify-between gap-10 p-12">
      <MissionBox
        icon={<HiUserGroup className="w-[83px] h-[83px]" />}
        title={"Great team work"}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nunc non neque euismod porttitor. Nullam lacus est, tincidunt eget sapien eget, maximus convallis massa. Curabitur quis tellus a tortor egestas viverra.  "
        }
      />
      <MissionBox
        icon={<BiRocket className="w-[83px] h-[83px]" />}
        title={"Our vision"}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.. "
        }
      />
      <MissionBox
        icon={<GoGraph className="w-[83px] h-[83px]" />}
        title={"Our mision"}
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..  "
        }
      />
    </div>
  );
}

export default Mission;
