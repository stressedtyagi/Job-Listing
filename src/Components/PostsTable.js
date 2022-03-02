import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTable } from "react-table";

/**
 *
 * @todo format the table data
 * @todo create animation for highlighting new update
 * @todo add infinite scroll
 * @todo refractor directory structure
 */
function PostsTable({ highlightedJob, ...tableData }) {
    const tableInstance = useTable(tableData);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <Table {...getTableProps()} colorScheme="facebook">
            <Thead>
                {
                    // Loop over the header rows
                    headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                // Loop over the headers in each row
                                headerGroup.headers.map((column) => (
                                    // Apply the header cell props
                                    <Th {...column.getHeaderProps()}>
                                        {
                                            // Render the header
                                            column.render("Header")
                                        }
                                    </Th>
                                ))
                            }
                        </Tr>
                    ))
                }
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {
                    // Loop over the table rows
                    rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);

                        return (
                            // Apply the row props
                            <Tr
                                {...row.getRowProps()}
                                backgroundColor={
                                    row.values.id === highlightedJob.id
                                        ? "blue"
                                        : ""
                                }
                            >
                                {
                                    // Loop over the rows cells
                                    row.cells.map((cell) => {
                                        // Apply the cell props
                                        return (
                                            <Td {...cell.getCellProps()}>
                                                {
                                                    // Render the cell contents
                                                    cell.render("Cell")
                                                }
                                            </Td>
                                        );
                                    })
                                }
                            </Tr>
                        );
                    })
                }
            </Tbody>
        </Table>
    );
}

export default PostsTable;
