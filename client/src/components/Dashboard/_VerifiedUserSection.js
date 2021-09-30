const VerifiedUserSection = ({ User }) => {
  return (
    <>
      <p>Thanks for verifying and becoming a full user.</p>
      {(Object.values(User.Personal).filter(v => v === null).length > 0 ||
        Object.values(User.Socials).filter(v => v === null).length > 0) && (
        <p>Please fill in all your profile details.</p>
      )}
    </>
  );
};

export default VerifiedUserSection;
