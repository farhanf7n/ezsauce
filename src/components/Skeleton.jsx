export default function Skeleton() {
  return (
    <div className="bg-[#EFEFEF] dark:bg-[#1F1F1F] border border-1 border-medium-gray rounded-[8px] shadow-drop animate-pulse">
      <div className="p-[24px]">
        <div className="w-full h-[135px] mb-[20px] bg-gray-300 dark:bg-gray-600 rounded-lg" />
        <div className="flex gap-[8px] mb-2">
          <div className="h-7 w-16 bg-gray-300 dark:bg-gray-600 rounded-[4px]" />
          <div className="h-7 w-16 bg-gray-300 dark:bg-gray-600 rounded-[4px]" />
        </div>
        <div className="pt-[8px] flex justify-between items-center">
          <div className="h-7 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
        </div>
      </div>
    </div>
  );
}
