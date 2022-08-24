import './App.css';

function App() {
  const pageInfo = {logo:"logo1.png", title:"Welcome to devbook's store", description:"books for programmers and developers."};

  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-sm-6'>
          <img src={pageInfo.logo} alt={pageInfo.title} className="img-fluid"/>
        </div>
        <div className='col-sm-6'>
            <h1>{pageInfo.title}</h1>
            <p>{pageInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
