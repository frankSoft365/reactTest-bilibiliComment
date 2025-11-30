import { Link } from 'react-router-dom';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';

export default function Article() {
    return (
        <div>
            <Link to={'/login'}>返回登陆页</Link>
            <CommentsBlock />
        </div>
    );
}