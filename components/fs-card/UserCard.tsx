// import { UserType } from "@/lib/user";
// import React from "react";

// export default function UserCard({
//     avatar,
//     name,
//     email,
//     creationAt,
//     updatedAt
// }: UserType) {

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
//         <img
//           src={avatar}
//           alt={name}
//           className="w-24 h-24 rounded-full mx-auto"
//         />

//         <h2 className="text-xl font-semibold text-center mt-4">
//           {name}
//         </h2>

//         {/* <p className="text-center text-gray-500">{user.role}</p> */}

//         <div className="mt-4 space-y-2 text-sm">
//           <p><span className="font-medium">Email:</span> {email}</p>
//           <p><span className="font-medium">Created:</span> {new Date(creationAt).toLocaleDateString()}</p>
//           <p><span className="font-medium">Updated:</span> {new Date(updatedAt).toLocaleDateString()}</p>
//         </div>

//         <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
//           View Profile
//         </button>
//       </div>
//     </div>
//   );
// }
import { UserType } from "@/lib/type/userResponse";
import React from "react";

export default function UserCard({
  avatar,
  name,
  email,
  creationAt,
  updatedAt,
}: UserType) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 container mx-auto mb-3 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex gap-4 items-center">
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border"
      />

      {/* Info */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg dark:text-white font-semibold">{name}</h2>
        </div>

        <p className="text-sm dark:text-white text-gray-500 truncate">{email}</p>

        <div className="mt-2 dark:text-white text-xs text-gray-400 flex gap-4">
          <span>
            Created: {new Date(creationAt).toLocaleDateString()}
          </span>
          <span>
            Updated: {new Date(updatedAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Action */}
      <button className="text-sm px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
        View
      </button>
    </div>
  );
}
