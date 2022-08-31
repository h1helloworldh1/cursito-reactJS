import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const pageInfo = {logo:"logo1.png", title:"Welcome to devbooks.", description:"books for programmers and developers."};
  const topics = ['Books', 'eBooks','Bestseller','New Arrivals']
  
  return (
    <div>
      <NavBar />
      {/* welcome-container */}
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
      {/* items list */}
      <ul>
      {topics.map(items => (
    <ItemListContainer value={items} />
        ))}
      </ul>
    </div>
  );
}

export default App;
