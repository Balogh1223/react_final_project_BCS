import TreeItem from "./TreeItem";

const TreeList = ({ trees }) => {
    return(
        <div>
            {trees.length == 0 ? <h3>Nincs megjeleníthető fa.</h3> : trees.map((tree) => (
                <TreeItem key={tree.id} tree={tree} />
            ))}
        </div>
    )
}
export default TreeList;