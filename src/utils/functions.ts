const scrollToEnd = (ref: React.RefObject<HTMLDivElement>) => {
    // timeout for scroll to execute after DOM has been updated
    const scrollTimeout = setTimeout(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, 0);

    return () => clearTimeout(scrollTimeout);
};

export { scrollToEnd };
