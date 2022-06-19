import { Button } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import PrivateRoute from '../../../components/auth/PrivateRoute';
import AdminLayout from '../../../components/layouts/AdminLayout';
import Spinner from '../../../components/shared/Spinner';
import { shortenText } from '../../../components/utils/misc.util';
import { iMovie } from '../dashboard';

const MovieList = () => {
    const [movies, setMovies] = useState<iMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const get = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/movies`);
            const data = await res.json();
            setMovies(data);
            setLoading(false);
        };
        get();
    }, []);

    const columns = [
        {
            name: 'title',
            label: 'Title',
            options: {
                filter: true,
                sort: true,
            },
        },
        { name: 'genre', label: 'Genre' },
        { name: 'year', label: 'Year' },
        { name: 'rating', label: 'Rating' },
        { name: 'actions', label: 'Actions' },
    ];

    const tableData = movies.map((movie, index) => ({
        title: (
            <Link href={`/admin/movies/edit/${movie._id}`}>
                <a>{shortenText(movie.title, 50)}</a>
            </Link>
        ),
        genre: movie.genre,
        year: movie.year,
        rating: movie.rating,
        actions: (
            <Fragment>
                <Button variant="outlined" color="success">
                    <Link href={`/admin/movies/${movie._id}`}>
                        <a>View</a>
                    </Link>
                </Button>
                <Button variant="outlined" color="secondary" sx={{ marginLeft: '5px' }}>
                    Edit
                </Button>
                <Button variant="outlined" sx={{ marginLeft: '5px' }}>
                    Delete
                </Button>
            </Fragment>
        ),
    }));

    return (
        <PrivateRoute>
            <AdminLayout>
                {loading ? <Spinner /> : <MUIDataTable columns={columns} data={tableData} title="All Movies" />}
            </AdminLayout>
        </PrivateRoute>
    );
};

export default MovieList;
