interface ClassCardProps {
  heading: string;
  img: string;
  schedule: string;
  content: string;
}

function ClassCard({ heading, img, schedule, content }: ClassCardProps) {
  return (
    <div className="h-fit rounded-xl bg-neutral-900">
      <img
        className="h-40 w-full rounded-t-xl object-cover"
        src={img}
        alt="class-image"
      />
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-bold">{heading}</h3>
        <p className="text-sm font-medium text-stone-400">{schedule}</p>
        <p className="text-sm font-medium text-stone-400">{content}</p>
      </div>
      <button className="mt-4 h-10 w-full rounded-b-xl bg-amber-400 text-lg font-bold text-black">
        Enroll
      </button>
    </div>
  );
}

export default ClassCard;
