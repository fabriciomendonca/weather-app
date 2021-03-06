import './TextField.css';

export function TextField(props: React.HTMLProps<HTMLInputElement>) {
  return <input {...props} className="TextField" data-testid="text-field" />;
}
