import Card from "../Bootstrap/Card";

const ProfileCompleteness = ({ User }) => {
  const [Personal, Socials] = [
    [
      Object.values(User.Personal).filter(v => v !== null).length,
      Object.values(User.Personal).length
    ],
    [
      Object.values(User.Socials).filter(v => v !== null).length,
      Object.values(User.Socials).length
    ]
  ];
  const Areas = {
    Personal,
    Socials
  };
  return (
    <Card Header="Profile Completion So Far..." className="ProfileCompleteness">
      {Object.keys(Areas).map(progress => (
        <div className="ProgressItem mb-3">
          <strong>{progress}</strong>
          <div className="progress" key={progress}>
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{
                width: (Areas[progress][0] / Areas[progress][1]) * 100 + "%"
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {((Areas[progress][0] / Areas[progress][1]) * 100).toFixed(0) +
                "%"}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default ProfileCompleteness;
