import { Metadata } from 'next';
import Spreadsheet from './Spreadsheet';

export const metadata: Metadata = {
  title: 'Next.js Spreadsheet App',
  description: 'A simple spreadsheet application with ag-Grid and Next.js',
};

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <h1>Spreadsheet with ag-Grid</h1>
        <Spreadsheet />
      </main>
    </div>
  );
}

export default Home;
