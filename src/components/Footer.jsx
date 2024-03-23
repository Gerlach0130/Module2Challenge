
export default function Footer() {
    const githubUrl = "https://github.com/gerlach0130";
    const linkedinUrl = "https://www.linkedin.com/in/mgerlach0130";
    const slackUrl = "https://vuvirtfsfpt10-fwx1318.slack.com/team/U060KQXTP4N";

    return (
        <footer className="footer-container">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img src='/images/github-logo.png'></img>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img src='/images/linkedin-logo.webp'></img>
            </a>
            <a href={slackUrl} target="_blank" rel="noopener noreferrer">
                <img src='/images/slack-icon.png'></img>
            </a>
        </footer>
    );
};