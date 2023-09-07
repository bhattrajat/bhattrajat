export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center pt-20"
    >
      <header>
        <h2 className="flex flex-col text-center text-slate-900">
          Explore my
          <span className="text-xl font-bold text-black">Experience</span>
        </h2>
      </header>
      <main className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-slate-900 p-4">
          <h3 className="text-xl font-bold">Senior Software Engineer</h3>
          <h4 className="text-lg font-semibold text-slate-800">
            Bacancy Technogy
          </h4>
          <ul className="list-inside list-disc">
            <li>
              Worked as a full stack developer in a SaaS product{" "}
              <a
                className="border-b-2 border-slate-900"
                href="https://julesai.com/"
              >
                JulesAI
              </a>
            </li>
            <li>
              Developed UI components using React, Material UI, TypeScript, and
              Apollo Client.
            </li>
            <li>
              Implemented GraphQL endpoints with Apollo Server, used Knex.js for
              SQL queries, and PostgreSQL for data storage.
            </li>
            <li>
              Worked on a feature where we implemented an email composer like
              Gmail to send emails to customers from the app.{" "}
            </li>
            <li>
              Fixed a critical bug related to file upload in Google Cloud which
              improved file upload time by around 2 seconds.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-slate-900 p-4">
          <h3 className="text-xl font-bold">Systems Engineer</h3>
          <h4 className="text-lg font-semibold text-slate-800">
            Tata Consultancy Services
          </h4>
          <ul className="list-inside list-disc">
            <li>
              Worked as a web developer using React & NextJS to build content
              driven sites using headless CMS like Wordpress, Contentful, Strapi
              CMS
            </li>
            <li>
              Worked with different clients to create their marketing sites,
              internal web portals etc
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}

// export default function Experience() {
//   return (
//     <section id="experience" className="py-10">
//       <div className="container mx-auto">
//         <h2 className="mb-6 text-center text-3xl font-bold text-black">
//           My Experience
//         </h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {/* Experience 1 */}
//           <div className="rounded-lg bg-white p-4 shadow-md">
//             <h3 className="mb-2 text-xl font-semibold">
//               Senior Software Engineer
//             </h3>
//             <h4 className="text-lg text-gray-700">Bacancy Technology</h4>
//             <ul className="mt-2 list-inside list-disc">
//               <li>
//                 Worked as a full-stack developer on the SaaS product{" "}
//                 <a
//                   className="text-blue-600 hover:underline"
//                   href="https://julesai.com/"
//                 >
//                   JulesAI
//                 </a>
//               </li>
//               <li>
//                 Developed UI components using React, Material UI, TypeScript,
//                 and Apollo Client.
//               </li>
//               <li>
//                 Implemented GraphQL endpoints with Apollo Server, used Knex.js
//                 for SQL queries, and PostgreSQL for data storage.
//               </li>
//               <li>
//                 Created an email composer feature similar to Gmail and improved
//                 file upload performance in Google Cloud.
//               </li>
//             </ul>
//           </div>

//           {/* Experience 2 */}
//           <div className="rounded-lg bg-white p-4 shadow-md">
//             <h3 className="mb-2 text-xl font-semibold">Systems Engineer</h3>
//             <h4 className="text-lg text-gray-700">Tata Consultancy Services</h4>
//             <ul className="mt-2 list-inside list-disc">
//               <li>
//                 Worked as a web developer using React & Next.js to build
//                 content-driven sites with headless CMS like WordPress,
//                 Contentful, and Strapi CMS.
//               </li>
//               <li>
//                 Collaborated with various clients to develop marketing sites and
//                 internal web portals.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
