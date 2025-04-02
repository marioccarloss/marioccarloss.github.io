export default function Spinner() {
  return(
    <>
      <div className="spinner"></div>

      <style jsx>{`
        @keyframes spin{
          0%{
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
          }
        }

        .spinner {

          border: 4px solid gray;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border-left-color: var(--color-secondary);
          animation: spin 1s ease infinite;
        }
      `}
      </style>
    </>
  )
}
