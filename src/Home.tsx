import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Home() {
	return (
        <>
			<h1>Home</h1>
            <div>
                <Link to="/new">
                    <Button>Add New Note</Button>
                </Link>
            </div>
        </>
	);
}
