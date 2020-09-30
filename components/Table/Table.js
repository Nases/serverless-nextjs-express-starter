import TableHead from './TableHead'
import TableRow from './TableRow'


const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full">
              <TableHead />
              <tbody>
                <TableRow />
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                    Jane Cooper
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    Regional Paradigm Technician
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    jane.cooper@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    Admin
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                    Cody Fisher
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    Product Directives Officer
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    cody.fisher@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                    Owner
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table