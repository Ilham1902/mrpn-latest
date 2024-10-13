// import React, { useEffect } from "react";
// import ApexTree from "apextree";
// import "../../../../../react-apextree.d.ts"; // Make sure to properly

// const TreeComponent = () => {
//   const treeRef = React.useRef(null);

//   useEffect(() => {
//     const data = {
//       id: "ms",
//       data: {
//         imageURL: "https://i.pravatar.cc/300?img=68",
//         name: "Margret Swanson",
//       },
//       options: {
//         nodeBGColor: "#cdb4db",
//         nodeBGColorHover: "#cdb4db",
//       },

//       children: [
//         {
//           id: "ms",
//           data: {
//             imageURL: "https://i.pravatar.cc/300?img=68",
//             name: "Margret Swanson",
//           },
//           options: {
//             nodeBGColor: "#cdb4db",
//             nodeBGColorHover: "#cdb4db",
//           },
//           children: [
//             {
//               id: "mh",
//               data: {
//                 imageURL: "https://i.pravatar.cc/300?img=69",
//                 name: "Mark Hudson",
//               },
//               options: {
//                 nodeBGColor: "#ffafcc",
//                 nodeBGColorHover: "#ffafcc",
//               },
//               children: [
//                 {
//                   id: "kb",
//                   data: {
//                     imageURL: "https://i.pravatar.cc/300?img=65",
//                     name: "Karyn Borbas",
//                   },
//                   options: {
//                     nodeBGColor: "#f8ad9d",
//                     nodeBGColorHover: "#f8ad9d",
//                   },
//                 },
//                 {
//                   id: "cr",
//                   data: {
//                     imageURL: "https://i.pravatar.cc/300?img=60",
//                     name: "Chris Rup",
//                   },
//                   options: {
//                     nodeBGColor: "#c9cba3",
//                     nodeBGColorHover: "#c9cba3",
//                   },
//                 },
//               ],
//             },
//             {
//               id: "cs",
//               data: {
//                 imageURL: "https://i.pravatar.cc/300?img=59",
//                 name: "Chris Lysek",
//               },
//               options: {
//                 nodeBGColor: "#00afb9",
//                 nodeBGColorHover: "#00afb9",
//               },
//               children: [
//                 {
//                   id: "Noah_Chandler",
//                   data: {
//                     imageURL: "https://i.pravatar.cc/300?img=57",
//                     name: "Noah Chandler",
//                   },
//                   options: {
//                     nodeBGColor: "#84a59d",
//                     nodeBGColorHover: "#84a59d",
//                   },
//                 },
//                 {
//                   id: "Felix_Wagner",
//                   data: {
//                     imageURL: "https://i.pravatar.cc/300?img=52",
//                     name: "Felix Wagner",
//                   },
//                   options: {
//                     nodeBGColor: "#0081a7",
//                     nodeBGColorHover: "#0081a7",
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     };

//     const options = {
//       contentKey: "data",
//       width: 800,
//       height: 600,
//       nodeWidth: 150,
//       nodeHeight: 100,
//       fontColor: "#fff",
//       borderColor: "#333",
//       childrenSpacing: 50,
//       siblingSpacing: 20,
//       direction: "top",
//       enableExpandCollapse: true,
//       nodeTemplate: (content: any) =>
//         `<div style='display: flex;flex-direction: column;gap: 10px;justify-content: center;align-items: center;height: 100%;'>
//         <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
//         <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
//        </div>`,
//       canvasStyle: "border: 1px solid black;background: #f6f6f6;",
//       enableToolbar: true,
//     };

//     const initTree = async () => {
//       const ApexTree = (await import("apextree")).default;
//       const tree = new ApexTree(document.getElementById("svg-tree"), options);
//       tree.render(data);
//     };

//     initTree();
//   }, []);

//   return <div ref={treeRef} id="svg-tree" />;
// };

// export default TreeComponent;

// import React from "react";
// import ApexTree from "react-apextree";

// const data = {
//   id: "idA",
//   name: "A",
//   children: [
//     {
//       id: "idB",
//       name: "B",
//       children: [
//         { id: "idC", name: "C" },
//         { id: "idD", name: "D" },
//       ],
//     },
//   ],
// };

// const options = {
//   width: 700,
//   height: 700,
//   nodeWidth: 120,
//   nodeHeight: 80,
//   childrenSpacing: 100,
//   siblingSpacing: 30,
//   direction: "top",
//   canvasStyle: "border: 1px solid black; background: #f6f6f6;",
// };

// const Chart = () => (
//   <div id="svg-tree">
//     <ApexTree data={data} options={options} />
//   </div>
// );

// export default Chart;
