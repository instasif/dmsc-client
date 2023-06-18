import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import TableRow from "../../Admission/TableRow";
import CsvDownloader from "react-csv-downloader";

const AllAdmissions = () => {
  const { user } = useContext(AuthContext);

  const { data: admissions = [], refetch } = useQuery({
    queryKey: "admissions",
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/admission?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="container px-4 mx-auto py-4">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800">Team members</h2>

        {admissions.length > 1 ? (
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {admissions.length} users
          </span>
        ) : (
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
            {admissions.length} user
          </span>
        )}

        <CsvDownloader
          datas={admissions}
          text="Eexport CSV"
          filename={`DMSC_Admissions` + new Date().toLocaleString()}
          extension=".CSV"
        >
          <button className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">
            Convert to Excel
          </button>
        </CsvDownloader>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>No.</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Name</span>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Class</span>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Session</span>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Fathers Name</span>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Mothers Name
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Local Guardian
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Permanent Address
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Present Address
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Birth Date
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Gurdian Phone
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {admissions.map((data, i) => (
                    <TableRow i={i} key={i} data={data} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAdmissions;

/* 



*/
