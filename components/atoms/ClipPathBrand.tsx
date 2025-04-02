interface ClipPathBrandProps {
  id: string
}

const ClipPathBrand = ({ id }: ClipPathBrandProps) => {
  return (
    <svg width="0" height="0">
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path transform="scale(0.000957854, 0.000986193)" d="M858.13 121.34C848.98 113.3 837.76 107.64 825.41 105.17L392.85 18.98C373.77 15.18 345.01 21.53 325.57 45.64C279.5 98.65 176.45 213.33 28.01 382.32C16.82 400.12 14 422.19 20.85 442.46L162.08 860.29C170.15 884.17 190.34 901.9 215.05 906.82L647.6 993.02C672.32 997.94 697.79 989.31 714.43 970.36L1005.76 638.72C1022.39 619.77 1027.67 593.4 1019.61 569.54L878.37 151.7C874.34 139.77 867.28 129.37 858.13 121.34L858.13 121.34Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ClipPathBrand
