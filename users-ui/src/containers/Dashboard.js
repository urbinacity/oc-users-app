import React, { useEffect, useState } from 'react';
import TableContainer from '../components/TableContainer';
import UserTable from '../components/UserTable';
import { getUsers } from '../actions/UserActions';

// export default class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       fetching: true,
//     };
//   };

//   componentDidMount() {
//     this.loadUsers();
//   };

//   async loadUsers() {
//     this.setState({
//       fetching: true,
//     });
//     const response = await getUsers();
//     this.setState({
//       users: response,
//       fetching: false,
//     });
//   }

//   render() {
//     const { users } = this.state;

//     return (
//       <TableContainer
//         title={'Users'}
//         subtitle={'List of registered users.'}
//       >
//         <UserTable
//           rows={users}
//         />
//       </TableContainer>
//     );
//   }
// };

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setFetching(true);

      const response = await getUsers();

      setUsers(response);
      setFetching(false);
    }

    fetchUsers();
  }, []);

  return (
    <TableContainer
      title={'Users'}
      subtitle={'List of registered users.'}
    >
      <UserTable
        rows={users}
        loading={fetching}
      />
    </TableContainer>
  );
}