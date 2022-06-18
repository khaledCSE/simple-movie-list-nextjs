import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListAlt, Movie } from '@mui/icons-material';
import MovieCard from '../../components/MovieCard';
import AdminLayout from '../../components/layouts/AdminLayout';
import { Grid } from '@mui/material';
import { movies } from '../../seed/movie.seeds';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <AdminLayout>
            <Grid container spacing={3}>
                {movies.map((movie) => (
                    <Grid item>
                        <MovieCard
                            key={movie._id}
                            title={movie.title}
                            shortDescription={movie.shortDescription}
                            image={movie.image}
                            link={`/movies/admin/${movie._id}`}
                            year={movie.year}
                        />
                    </Grid>
                ))}
            </Grid>
        </AdminLayout>
    );
}
