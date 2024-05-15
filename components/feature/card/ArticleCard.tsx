import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type CardProps = React.ComponentProps<typeof Card>;

const ArticleCard = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ab
        dolorem nulla omnis placeat rerum perferendis totam temporibus. Magnam
        iusto quae quidem cumque consectetur ea, veritatis fugiat laborum
        corporis illum!
      </CardContent>
      <CardFooter>
        <Link href='/' className=' text-blue-500'>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
