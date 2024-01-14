

export default function SurveyLayer() {

    const style: React.CSSProperties = {
        zIndex: 1000,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    }

    return (
        <div style={style}>
            <h1>Survey Layer</h1>
        </div>
    )
}