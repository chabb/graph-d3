1. Initial setup
2. Rendering nodes
3. Dragging a node
4. Dragging the canvas
5. Zoom
   5b. Intermission. UI/UX design, GIT repositorty
6. The grid ( basic )
7. The grid ( infinite )
8. State
9. Styling nodes
10. A node palette
11. Code diffing ?
12. State on the server

// 1 - 2 - 3 - 4 - 5 -6 - 7 -8.
// Not concerned about the state ()

// Intuition :
// 1. We treat inputs as props
// => Immutable objects or objects that cannot be mutated from outside the components
// => There is always a temptation to pass an object reference that can be mutated by a child components, or
// an injected. One can argue it's okay, as long as the children objects or services are encapsulated to
// this component. This can be a reasonable argument, but most of the time, it's a way to encapsulate
// mess, or hide the mess under the carpet
// => if inputs are treated as props => Immutable objects. Only updated by the parents, or updated by
// a service that exposes some global state. Inputs are extracted from this state.
