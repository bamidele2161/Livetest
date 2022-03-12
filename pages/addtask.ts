import { useRouter } from 'next/router'

const About = () => {
    const router = useRouter();
    const {pid} = router.query;
  return <div>about page</div>;
};

export default About;
