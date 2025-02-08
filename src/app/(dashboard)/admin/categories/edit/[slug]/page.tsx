import FormEditCategory from "./_components/FormEditCategory"

type CategoryEditPageProps = {
  params:Promise<{ slug: string }>
}

const CategoryEditPage = async({params}:CategoryEditPageProps) => {
  const slug = (await params).slug
  return (
    <>
      <FormEditCategory slug={slug} />
    </>
  )
}

export default CategoryEditPage