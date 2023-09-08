export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center pt-20"
    >
      <header>
        <h2 className="flex flex-col text-center text-slate-900 dark:text-slate-200">
          Explore my
          <span className="text-xl font-bold text-black dark:text-white">
            Experience
          </span>
        </h2>
      </header>
      <main className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-slate-900 p-4 dark:border-slate-200">
          <h3 className="text-xl font-bold">Senior Software Engineer</h3>
          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Bacancy Technogy
          </h4>
          <ul className="mt-2 list-inside list-disc">
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
        <div className="rounded-3xl border-2 border-slate-900 p-4 dark:border-slate-200">
          <h3 className="text-xl font-bold">Systems Engineer</h3>
          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
            Tata Consultancy Services
          </h4>
          <ul className="mt-2 list-inside list-disc">
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
