import { Container, Rating, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import AdminLayout from '../../../components/layouts/AdminLayout';
import { movies } from '../../../seed/movie.seeds';
import styles from './AdminDetails.module.scss';

const SingleMovie = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const movie = movies.filter((el) => el._id.toString() === id)[0];
    return (
        <AdminLayout>
            <div className={styles.holder}>
                <div className={styles.img}>
                    <img src={movie.image} alt="" />
                </div>
                <div className={styles.content}>
                    <Typography variant="h2">
                        {movie.title} ({movie.year})
                    </Typography>
                    <p>
                        <b>Genre:</b> Action
                    </p>
                    <div className={styles.ratings}>
                        <span>
                            <b>Rating:</b>
                        </span>
                        <Rating value={3.5} precision={0.5} />
                        <span>3.5 / 5</span>
                    </div>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, incidunt, accusamus perferendis
                        tempora doloremque obcaecati tempore quia enim quisquam ut quasi veniam labore asperiores odio
                        unde distinctio praesentium dolorem placeat culpa delectus nam! Labore, alias? Adipisci
                        distinctio sapiente sint error explicabo autem iure voluptatum nobis quis ipsam labore nulla
                        veniam asperiores dignissimos modi facere, laboriosam eos qui, quod quasi voluptatem. A,
                        recusandae quia dolorum sapiente et cumque! Et ipsum non vitae? Dolorem dicta iure perferendis
                        quos eaque reiciendis, fugiat sed a minus ab vel iusto. Assumenda itaque, illum vero laudantium
                        necessitatibus corporis id alias perferendis quaerat fuga voluptates obcaecati nesciunt ad
                        possimus eum inventore expedita praesentium animi explicabo facere tempore reiciendis dolor.
                        Ducimus, id dolorem! Veniam ut eveniet recusandae rerum excepturi magnam, impedit accusamus
                        magni quaerat odit ducimus? Doloremque, omnis dolor. Animi minima alias nihil asperiores,
                        recusandae veniam quia sapiente eveniet suscipit odit reprehenderit ipsa unde vitae earum
                        excepturi cumque quibusdam vel deleniti corporis! Dignissimos quae amet quam maiores laudantium
                        fuga minima, assumenda aliquam libero quidem sapiente unde pariatur officia facilis porro
                        perspiciatis magni eveniet reprehenderit hic obcaecati rerum soluta nemo et ipsa. Pariatur
                        officiis adipisci nam voluptates ad laboriosam! Porro, numquam! Et suscipit fuga neque eum nulla
                        perspiciatis eligendi!
                    </Typography>
                </div>
            </div>
        </AdminLayout>
    );
};

export default SingleMovie;
