"use client";

import Image from "next/image";
import React from "react";

interface Student {
  id: number;
  name: string;
  roll: string;
  class: string;
  ins: string;
  img: string;
}

const Table: React.FC = () => {
  const data: Student[] = [
    {
      id: 1,
      name: "Rahim",
      roll: "101",
      class: "10",
      ins: "Dhaka High School",
      img: "/assets/profile1.png",
    },
    {
      id: 2,
      name: "Karim",
      roll: "102",
      class: "10",
      ins: "Dhaka High School",
      img: "/assets/profile2.png",
    },
    {
      id: 3,
      name: "Sujon",
      roll: "103",
      class: "10",
      ins: "Rajshahi High School",
      img: "/assets/profile3.png",
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">
        Student Information
      </h2>

      <table className="w-full border border-gray-200 text-left text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="py-3 px-4 border-b">Photo</th>
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Roll</th>
            <th className="py-3 px-4 border-b">Class</th>
            <th className="py-3 px-4 border-b">Institute</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr
              key={student.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="py-2 px-4 border-b">
                <Image
                  src={student.img}
                  alt={student.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b font-medium text-gray-800">
                {student.name}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
                {student.roll}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
                {student.class}
              </td>
              <td className="py-2 px-4 border-b text-gray-700">
                {student.ins}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
