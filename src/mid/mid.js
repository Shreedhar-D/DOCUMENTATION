// Add interactivity if needed
document.querySelectorAll('.buttons-container button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked on ${button.textContent}`);
    });
});

function MidContent() {
    return (
        <section className={}>
            <div className="container">
                <h2 className="text--center">Release Notes</h2>
                <iframe
                    src="/mid/mid.html"
                    className={}
                    title="Custom Release Notes"
                ></iframe>
            </div>
        </section>
    );
}
