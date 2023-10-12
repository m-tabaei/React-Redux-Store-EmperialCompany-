import {  useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const create = () => {
    navigate('./create');
  };
  const Delete = () => {
    navigate('/dashboard/delete');
  };
  const Edit = () => {
    navigate('/dashboard/edit');
  };
  return (
    <div className="d-block text-center ">

      <button onClick={create} className="btn btn-primary text-capitalize m-5" style={{ width: '150px' }}>Create</button>
      <button onClick={Delete} className="btn btn-danger text-capitalize m-5" style={{ width: '150px' }}>Delete</button>
      <button onClick={Edit} className="btn btn-warning text-capitalize m-5" style={{ width: '150px' }}>Edit</button>
    </div>
  );
}

export default Dashboard;
