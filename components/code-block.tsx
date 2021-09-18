import { CodeComponent } from 'react-markdown/src/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


// このファイルはエラー出てるけどなんか動く。今度調べる。

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
	if (inline) {
		return <code className={className}>{children}</code>;
	}
	const match = /language-(\w+)/.exec(className || '');
	const lang = match && match[1] ? match[1] : '';
	return (
		<SyntaxHighlighter
			style={atomDark}
			language={lang}
			children={String(children).replace(/\n$/, '')}
		/>
	);
};

export default CodeBlock;
