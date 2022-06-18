import { useRouter } from 'next/router';

const SingleMovie = () => {
    const router = useRouter();
    const id = router.query.id;
    return <p>Hello, {id}</p>;
};

export default SingleMovie;
