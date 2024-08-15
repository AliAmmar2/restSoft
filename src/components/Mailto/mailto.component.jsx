const Mailto = ({ email, subject, body,className, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}` } className={className}>{children}</a>
    );
  };

export default Mailto;