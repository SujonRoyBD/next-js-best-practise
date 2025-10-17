'use client';

import Image from "next/image";
import React, { useState } from "react";

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
    { id: 1, name: "Rahim", roll: "101", class: "10", ins: "Dhaka High School", img: "/assets/profile1.png" },
    { id: 2, name: "Karim", roll: "102", class: "10", ins: "Dhaka High School", img: "/assets/profile2.png" },
    { id: 3, name: "Sujon", roll: "103", class: "10", ins: "Rajshahi High School", img: "/assets/profile3.png" },
    { id: 4, name: "Rahim", roll: "101", class: "10", ins: "Dhaka High School", img: "/assets/profile1.png" },
    { id: 5, name: "Karim", roll: "102", class: "10", ins: "Dhaka High School", img: "/assets/profile2.png" },
    { id: 6, name: "Sujon", roll: "103", class: "10", ins: "Rajshahi High School", img: "/assets/profile3.png" },
    { id: 7, name: "Rahim", roll: "101", class: "10", ins: "Dhaka High School", img: "/assets/profile1.png" },
    { id: 8, name: "Karim", roll: "102", class: "10", ins: "Dhaka High School", img: "/assets/profile2.png" },
    { id: 9, name: "Sujon", roll: "103", class: "10", ins: "Rajshahi High School", img: "/assets/profile3.png" },
    { id: 10, name: "Rahim", roll: "101", class: "10", ins: "Dhaka High School", img: "/assets/profile1.png" },
    { id: 11, name: "Karim", roll: "102", class: "10", ins: "Dhaka High School", img: "/assets/profile2.png" },
    { id: 12, name: "Sujon", roll: "103", class: "10", ins: "Rajshahi High School", img: "/assets/profile3.png" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // প্রতি পেজে ৫টি item দেখাবে

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">Student Information</h2>

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
          {currentItems.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="py-2 px-4 border-b">
                <Image
                  src={student.img}
                  alt={student.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b font-medium text-gray-800">{student.name}</td>
              <td className="py-2 px-4 border-b text-gray-700">{student.roll}</td>
              <td className="py-2 px-4 border-b text-gray-700">{student.class}</td>
              <td className="py-2 px-4 border-b text-gray-700">{student.ins}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4 space-x-2">
        

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}

      
      </div>
    </div>
  );
};

export default Table;
