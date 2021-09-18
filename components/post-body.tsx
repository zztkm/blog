import ReactMarkdown from 'react-markdown';
import CodeBlock from './code-block';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="markdown-body col-span-5 m-10">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlock,
          }}
        />
      </div>
    </div >
  );
}

export default PostBody
